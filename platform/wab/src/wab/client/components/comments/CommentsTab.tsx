// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Dropdown, Menu } from "antd";

import CommentPost from "@/wab/client/components/comments/CommentPost";
import CommentPostForm from "@/wab/client/components/comments/CommentPostForm";
import { useCommentsCtx } from "@/wab/client/components/comments/CommentsProvider";
import ThreadComments from "@/wab/client/components/comments/ThreadComments";
import {
  getThreadsFromComments,
  getThreadsFromFocusedComponent,
  TplComment,
} from "@/wab/client/components/comments/utils";
import {
  SidebarModal,
  SidebarModalProvider,
} from "@/wab/client/components/sidebar/SidebarModal";
import { useViewCtxMaybe } from "@/wab/client/contexts/StudioContexts";
import {
  DefaultCommentsTabProps,
  PlasmicCommentsTab,
} from "@/wab/client/plasmic/plasmic_kit_comments/PlasmicCommentsTab";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { CommentThreadId } from "@/wab/shared/ApiSchema";
import { isTplNamable, summarizeTplNamable } from "@/wab/shared/core/tpls";
import { observer } from "mobx-react";
import * as React from "react";
import { useState } from "react";

export const DEFAULT_NOTIFICATION_LEVEL = "mentions-and-replies";
export const notifyAboutKeyToLabel = {
  all: "All comments",
  "mentions-and-replies": "Replies only",
  none: "None",
} as const;

export type CommentsTabProps = DefaultCommentsTabProps;

export const CommentsTab = observer(function CommentsTab(
  props: CommentsTabProps
) {
  const studioCtx = useStudioCtx();
  const viewCtx = useViewCtxMaybe();

  const [shownThreadId, setShownThreadId] = useState<
    CommentThreadId | undefined
  >(undefined);

  let focusedTpl = viewCtx?.focusedTpl();
  if (!isTplNamable(focusedTpl)) {
    focusedTpl = null;
  }

  const currentComponent = studioCtx.currentComponent;

  const { allComments, selfNotificationSettings, refreshComments } =
    useCommentsCtx();

  if (!currentComponent) {
    return null;
  }

  function renderRootComment(threadComments: TplComment[]) {
    const [comment] = threadComments;

    const threadId = comment.threadId;

    return (
      <CommentPost
        comment={comment}
        subjectLabel={comment.label}
        isThread
        repliesLinkLabel={
          threadComments.length > 1
            ? `${threadComments.length - 1} replies`
            : "Reply"
        }
        onClick={async () => {
          const ownerComponent = studioCtx
            .tplMgr()
            .findComponentContainingTpl(comment.subject);
          if (ownerComponent) {
            await studioCtx.setStudioFocusOnTpl(
              ownerComponent,
              comment.subject
            );
            studioCtx.centerFocusedFrame(1);
          }
          setShownThreadId(threadId);
        }}
      />
    );
  }

  const threads = getThreadsFromComments(allComments);

  const {
    focusedSubjectThreads,
    focusedComponentThreads,
    otherComponentsThreads,
  } = getThreadsFromFocusedComponent(threads, currentComponent, focusedTpl);

  // We have the focused element threads together, with the focused subject threads first
  const currentFocusThreads = [
    ...focusedSubjectThreads,
    ...focusedComponentThreads,
  ];

  const projectId = studioCtx.siteInfo.id;
  const branchId = studioCtx.branchInfo()?.id;

  const currentNotificationLevel =
    selfNotificationSettings?.notifyAbout ?? DEFAULT_NOTIFICATION_LEVEL;

  return (
    <div
      className={"comments-tab flex-even"}
      style={{
        overflow: "scroll",
      }}
    >
      <SidebarModalProvider containerSelector=".comments-tab">
        <PlasmicCommentsTab
          {...props}
          emptySelection={!focusedTpl}
          notificationsButton={{
            props: {
              children: `Notifications: ${notifyAboutKeyToLabel[currentNotificationLevel]}`,
            },
            wrap: (node) => (
              <Dropdown
                overlay={
                  <Menu selectedKeys={[currentNotificationLevel]}>
                    <Menu.ItemGroup title={"Notify me about"}>
                      {Object.entries(notifyAboutKeyToLabel).map(
                        ([key, label]) => (
                          <Menu.Item
                            key={key}
                            onClick={async () => {
                              await studioCtx.appCtx.api.updateNotificationSettings(
                                projectId,
                                branchId,
                                {
                                  ...selfNotificationSettings,
                                  notifyAbout: key as any,
                                }
                              );
                              await refreshComments();
                            }}
                          >
                            {label}
                          </Menu.Item>
                        )
                      )}
                    </Menu.ItemGroup>
                  </Menu>
                }
              >
                {node}
              </Dropdown>
            ),
          }}
          currentlySelectedTitle={{
            wrap: focusedTpl ? (it) => it : () => null,
          }}
          currentlySelectedSubject={{
            children:
              focusedTpl && viewCtx
                ? summarizeTplNamable(
                    focusedTpl,
                    viewCtx.effectiveCurrentVariantSetting(focusedTpl).rsh()
                  )
                : undefined,
          }}
          currentlySelectedPrefix={
            currentFocusThreads.length > 0
              ? {}
              : { children: "Comment on selected" }
          }
          currentThreadsList={{
            children: currentFocusThreads.map((threadComments) =>
              renderRootComment(threadComments)
            ),
          }}
          newThreadForm={{
            render: () => (focusedTpl ? <CommentPostForm /> : null),
          }}
          restThreadsSection={{
            wrap: (node) => otherComponentsThreads.length > 0 && node,
          }}
          restThreadsList={{
            children: otherComponentsThreads.map((threadComments) =>
              renderRootComment(threadComments)
            ),
          }}
        />
        {shownThreadId && (
          <SidebarModal
            show
            onClose={() => setShownThreadId(undefined)}
            title={threads.get(shownThreadId)?.[0]?.label}
          >
            <ThreadComments
              comments={threads.get(shownThreadId) ?? []}
              threadId={shownThreadId}
            />
          </SidebarModal>
        )}
      </SidebarModalProvider>
    </div>
  );
});

export default CommentsTab;
