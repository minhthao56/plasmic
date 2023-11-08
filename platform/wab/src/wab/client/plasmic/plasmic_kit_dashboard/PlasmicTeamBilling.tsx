// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: MtL6MGlBxoy

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import FreeTrial from "../../components/FreeTrial"; // plasmic-import: p3GgKAlaQe/component
import Switch from "../../components/widgets/Switch"; // plasmic-import: b35JDgXpbiF/component
import PriceTierPicker from "../../components/pricing/PriceTierPicker"; // plasmic-import: Xx_WsdQKli-S/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicTeamBilling.module.css"; // plasmic-import: MtL6MGlBxoy/css

import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import CloseIcon from "../plasmic_kit/PlasmicIcon__Close"; // plasmic-import: hy7vKrgdAZwW4/icon

createPlasmicElementProxy;

export type PlasmicTeamBilling__VariantMembers = {
  showBillingError: "showBillingError";
  tier: "free" | "enterprise";
};
export type PlasmicTeamBilling__VariantsArgs = {
  showBillingError?: SingleBooleanChoiceArg<"showBillingError">;
  tier?: SingleChoiceArg<"free" | "enterprise">;
};
type VariantPropType = keyof PlasmicTeamBilling__VariantsArgs;
export const PlasmicTeamBilling__VariantProps = new Array<VariantPropType>(
  "showBillingError",
  "tier"
);

export type PlasmicTeamBilling__ArgsType = {
  billingError?: React.ReactNode;
  currentBill?: React.ReactNode;
  seatsUsed?: React.ReactNode;
  seatsPurchased?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTeamBilling__ArgsType;
export const PlasmicTeamBilling__ArgProps = new Array<ArgPropType>(
  "billingError",
  "currentBill",
  "seatsUsed",
  "seatsPurchased"
);

export type PlasmicTeamBilling__OverridesType = {
  root?: p.Flex<"div">;
  learnMore?: p.Flex<"a">;
  freeTrial?: p.Flex<typeof FreeTrial>;
  billingFrequencyToggle?: p.Flex<typeof Switch>;
  priceTierPicker?: p.Flex<typeof PriceTierPicker>;
  premiumSections?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  billingEmail?: p.Flex<"input">;
  updateBillingEmailButton?: p.Flex<typeof Button>;
  changeSeatsButton?: p.Flex<typeof Button>;
  changeCreditCardButton?: p.Flex<typeof Button>;
  cancelSubscriptionButton?: p.Flex<typeof Button>;
};

export interface DefaultTeamBillingProps {
  billingError?: React.ReactNode;
  currentBill?: React.ReactNode;
  seatsUsed?: React.ReactNode;
  seatsPurchased?: React.ReactNode;
  showBillingError?: SingleBooleanChoiceArg<"showBillingError">;
  tier?: SingleChoiceArg<"free" | "enterprise">;
  className?: string;
}

const $$ = {};

function PlasmicTeamBilling__RenderFunc(props: {
  variants: PlasmicTeamBilling__VariantsArgs;
  args: PlasmicTeamBilling__ArgsType;
  overrides: PlasmicTeamBilling__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showBillingError",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showBillingError,
      },
      {
        path: "tier",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.tier,
      },
      {
        path: "billingFrequencyToggle.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => "isChecked",
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootshowBillingError]: hasVariant(
            $state,
            "showBillingError",
            "showBillingError"
          ),
          [sty.roottier_free]: hasVariant($state, "tier", "free"),
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__nOs6U, {
          [sty.freeBoxshowBillingError__nOs6UXmPkf]: hasVariant(
            $state,
            "showBillingError",
            "showBillingError"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "ERROR: Cannot process payment",
          value: args.billingError,
          className: classNames(sty.slotTargetBillingError),
        })}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__ftaU, {
          [sty.freeBoxshowBillingError__ftaUXmPkf]: hasVariant(
            $state,
            "showBillingError",
            "showBillingError"
          ),
          [sty.freeBoxtier_free__ftaUxEnAp]: hasVariant($state, "tier", "free"),
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xXxvr)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___7YcIa)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___70ASv
              )}
            >
              {"Account Plan"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2PErC)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qCvxa,
                  {
                    [sty.textshowBillingError__qCvxaXmPkf]: hasVariant(
                      $state,
                      "showBillingError",
                      "showBillingError"
                    ),
                  }
                )}
              >
                {"Pick a plan that fits your workflow."}
              </div>
              <a
                data-plasmic-name={"learnMore"}
                data-plasmic-override={overrides.learnMore}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.learnMore
                )}
                href={"https://www.plasmic.app/pricing"}
                target={"_blank"}
              >
                {"Learn more."}
              </a>
            </p.Stack>
          </div>
          {(hasVariant($state, "tier", "free") ? true : false) ? (
            <FreeTrial
              data-plasmic-name={"freeTrial"}
              data-plasmic-override={overrides.freeTrial}
              accountSection={true}
              className={classNames("__wab_instance", sty.freeTrial, {
                [sty.freeTrialtier_free]: hasVariant($state, "tier", "free"),
              })}
            />
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fQ70J, {
              [sty.freeBoxtier_enterprise__fQ70J5Ph4X]: hasVariant(
                $state,
                "tier",
                "enterprise"
              ),
              [sty.freeBoxtier_free__fQ70JXEnAp]: hasVariant(
                $state,
                "tier",
                "free"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "$45/month",
              value: args.currentBill,
              className: classNames(sty.slotTargetCurrentBill),
            })}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4Yo4
              )}
            >
              {"Recurring bill"}
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mOmdD)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2NKs)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "1",
                value: args.seatsUsed,
                className: classNames(sty.slotTargetSeatsUsed),
              })}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gJjIm
                )}
              >
                {"of"}
              </div>
              {p.renderPlasmicSlot({
                defaultContents: "3",
                value: args.seatsPurchased,
                className: classNames(sty.slotTargetSeatsPurchased),
              })}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iz26I
                )}
              >
                {"seats used"}
              </div>
            </p.Stack>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ofLuw
              )}
            >
              {"Current usage"}
            </div>
          </p.Stack>
        </p.Stack>
        <Switch
          data-plasmic-name={"billingFrequencyToggle"}
          data-plasmic-override={overrides.billingFrequencyToggle}
          className={classNames("__wab_instance", sty.billingFrequencyToggle)}
          isChecked={
            p.generateStateValueProp($state, [
              "billingFrequencyToggle",
              "isChecked",
            ]) ?? false
          }
          onChange={(...eventArgs) => {
            p.generateStateOnChangeProp($state, [
              "billingFrequencyToggle",
              "isChecked",
            ])(eventArgs[0]);
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0IM
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 500 }}
              >
                {"Annual Billing"}
              </span>
              <React.Fragment>{" (Save 20%)"}</React.Fragment>
            </React.Fragment>
          </div>
        </Switch>
      </div>
      <PriceTierPicker
        data-plasmic-name={"priceTierPicker"}
        data-plasmic-override={overrides.priceTierPicker}
        className={classNames("__wab_instance", sty.priceTierPicker, {
          [sty.priceTierPickershowBillingError]: hasVariant(
            $state,
            "showBillingError",
            "showBillingError"
          ),
          [sty.priceTierPickertier_enterprise]: hasVariant(
            $state,
            "tier",
            "enterprise"
          ),
          [sty.priceTierPickertier_free]: hasVariant($state, "tier", "free"),
        })}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"premiumSections"}
        data-plasmic-override={overrides.premiumSections}
        hasGap={true}
        className={classNames(projectcss.all, sty.premiumSections, {
          [sty.premiumSectionstier_free]: hasVariant($state, "tier", "free"),
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__egD9R)}
        >
          <h4
            data-plasmic-name={"h4"}
            data-plasmic-override={overrides.h4}
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4
            )}
          >
            {"Preferences"}
          </h4>
          <div className={classNames(projectcss.all, sty.freeBox__sDa4Q)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__oz3Ad)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dsQj7
                )}
              >
                {"Billing email"}
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___4WK2C)}
              >
                <input
                  data-plasmic-name={"billingEmail"}
                  data-plasmic-override={overrides.billingEmail}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.billingEmail
                  )}
                  placeholder={"Enter…"}
                  ref={(ref) => {
                    $refs["billingEmail"] = ref;
                  }}
                  size={1}
                  type={"email"}
                  value={""}
                />

                <Button
                  data-plasmic-name={"updateBillingEmailButton"}
                  data-plasmic-override={overrides.updateBillingEmailButton}
                  className={classNames(
                    "__wab_instance",
                    sty.updateBillingEmailButton
                  )}
                  endIcon={
                    <ChevronDownsvgIcon
                      className={classNames(projectcss.all, sty.svg__lL73)}
                      role={"img"}
                    />
                  }
                  size={"wide"}
                  startIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg__dEpin)}
                      role={"img"}
                    />
                  }
                  type={["primary"]}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vqNbp
                    )}
                  >
                    {"Update"}
                  </div>
                </Button>
              </p.Stack>
            </p.Stack>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2CSw, {
                [sty.freeBoxshowBillingError___2CSwXmPkf]: hasVariant(
                  $state,
                  "showBillingError",
                  "showBillingError"
                ),
                [sty.freeBoxtier_enterprise___2CSw5Ph4X]: hasVariant(
                  $state,
                  "tier",
                  "enterprise"
                ),
                [sty.freeBoxtier_free___2CSwxEnAp]: hasVariant(
                  $state,
                  "tier",
                  "free"
                ),
              })}
            >
              <Button
                data-plasmic-name={"changeSeatsButton"}
                data-plasmic-override={overrides.changeSeatsButton}
                className={classNames("__wab_instance", sty.changeSeatsButton)}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__a4XtS)}
                    role={"img"}
                  />
                }
                size={"wide"}
                startIcon={
                  <ArrowRightsvgIcon
                    className={classNames(projectcss.all, sty.svg__zyBz8)}
                    role={"img"}
                  />
                }
                type={["secondary"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uzg1X
                  )}
                >
                  {"Manage seats"}
                </div>
              </Button>
              <Button
                data-plasmic-name={"changeCreditCardButton"}
                data-plasmic-override={overrides.changeCreditCardButton}
                className={classNames(
                  "__wab_instance",
                  sty.changeCreditCardButton
                )}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__bwN41)}
                    role={"img"}
                  />
                }
                size={"wide"}
                startIcon={
                  <ArrowRightsvgIcon
                    className={classNames(projectcss.all, sty.svg__g7GmU)}
                    role={"img"}
                  />
                }
                type={["secondary"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l6WqO
                  )}
                >
                  {"Change credit card"}
                </div>
              </Button>
              <Button
                data-plasmic-name={"cancelSubscriptionButton"}
                data-plasmic-override={overrides.cancelSubscriptionButton}
                className={classNames(
                  "__wab_instance",
                  sty.cancelSubscriptionButton
                )}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__yK6Zg)}
                    role={"img"}
                  />
                }
                size={"wide"}
                startIcon={
                  <CloseIcon
                    className={classNames(projectcss.all, sty.svg__htmVy)}
                    role={"img"}
                  />
                }
                type={["backlitError"]}
                withIcons={["startIcon"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iI7N
                  )}
                >
                  {"Cancel plan"}
                </div>
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "learnMore",
    "freeTrial",
    "billingFrequencyToggle",
    "priceTierPicker",
    "premiumSections",
    "h4",
    "billingEmail",
    "updateBillingEmailButton",
    "changeSeatsButton",
    "changeCreditCardButton",
    "cancelSubscriptionButton",
  ],
  learnMore: ["learnMore"],
  freeTrial: ["freeTrial"],
  billingFrequencyToggle: ["billingFrequencyToggle"],
  priceTierPicker: ["priceTierPicker"],
  premiumSections: [
    "premiumSections",
    "h4",
    "billingEmail",
    "updateBillingEmailButton",
    "changeSeatsButton",
    "changeCreditCardButton",
    "cancelSubscriptionButton",
  ],
  h4: ["h4"],
  billingEmail: ["billingEmail"],
  updateBillingEmailButton: ["updateBillingEmailButton"],
  changeSeatsButton: ["changeSeatsButton"],
  changeCreditCardButton: ["changeCreditCardButton"],
  cancelSubscriptionButton: ["cancelSubscriptionButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  learnMore: "a";
  freeTrial: typeof FreeTrial;
  billingFrequencyToggle: typeof Switch;
  priceTierPicker: typeof PriceTierPicker;
  premiumSections: "div";
  h4: "h4";
  billingEmail: "input";
  updateBillingEmailButton: typeof Button;
  changeSeatsButton: typeof Button;
  changeCreditCardButton: typeof Button;
  cancelSubscriptionButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamBilling__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamBilling__VariantsArgs;
    args?: PlasmicTeamBilling__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamBilling__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamBilling__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTeamBilling__ArgProps,
          internalVariantPropNames: PlasmicTeamBilling__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTeamBilling__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamBilling";
  } else {
    func.displayName = `PlasmicTeamBilling.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamBilling = Object.assign(
  // Top-level PlasmicTeamBilling renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    learnMore: makeNodeComponent("learnMore"),
    freeTrial: makeNodeComponent("freeTrial"),
    billingFrequencyToggle: makeNodeComponent("billingFrequencyToggle"),
    priceTierPicker: makeNodeComponent("priceTierPicker"),
    premiumSections: makeNodeComponent("premiumSections"),
    h4: makeNodeComponent("h4"),
    billingEmail: makeNodeComponent("billingEmail"),
    updateBillingEmailButton: makeNodeComponent("updateBillingEmailButton"),
    changeSeatsButton: makeNodeComponent("changeSeatsButton"),
    changeCreditCardButton: makeNodeComponent("changeCreditCardButton"),
    cancelSubscriptionButton: makeNodeComponent("cancelSubscriptionButton"),

    // Metadata about props expected for PlasmicTeamBilling
    internalVariantProps: PlasmicTeamBilling__VariantProps,
    internalArgProps: PlasmicTeamBilling__ArgProps,
  }
);

export default PlasmicTeamBilling;
/* prettier-ignore-end */