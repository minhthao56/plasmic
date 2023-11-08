// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComponentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComponentIcon(props: ComponentIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M32 16.42c-2.305-1.573-4.574-2.842-6.712-3.758-2.378-1.02-4.69-1.644-6.768-1.702-2.084-.058-4.121.458-5.612 1.948-1.49 1.49-2.006 3.528-1.948 5.612.058 2.077.683 4.39 1.702 6.768.916 2.138 2.185 4.407 3.759 6.712-1.574 2.305-2.843 4.574-3.76 6.712-1.018 2.377-1.643 4.69-1.701 6.768-.058 2.084.458 4.121 1.948 5.612 1.49 1.49 3.528 2.006 5.612 1.948 2.077-.058 4.39-.683 6.768-1.702 2.138-.916 4.407-2.185 6.712-3.759 2.305 1.574 4.574 2.843 6.712 3.76 2.378 1.018 4.69 1.643 6.768 1.701 2.084.058 4.121-.458 5.612-1.948 1.49-1.49 2.006-3.528 1.948-5.612-.058-2.077-.683-4.39-1.702-6.768-.916-2.138-2.185-4.407-3.759-6.712 1.574-2.305 2.843-4.574 3.76-6.712 1.018-2.378 1.643-4.69 1.701-6.768.058-2.084-.458-4.121-1.948-5.612-1.49-1.49-3.528-2.006-5.612-1.948-2.077.058-4.39.683-6.768 1.702-2.138.916-4.407 2.185-6.712 3.759zM15.736 48.264c.463.463 1.274.818 2.672.779 1.404-.04 3.203-.48 5.304-1.38 1.533-.657 3.175-1.537 4.872-2.62a62.984 62.984 0 01-5.07-4.557 62.984 62.984 0 01-4.556-5.07c-1.083 1.699-1.963 3.34-2.62 4.873-.9 2.101-1.34 3.9-1.38 5.304-.039 1.398.316 2.21.778 2.672zM21.361 32a58.18 58.18 0 004.982 5.657A58.18 58.18 0 0032 42.639a58.192 58.192 0 005.657-4.982A58.192 58.192 0 0042.639 32a58.178 58.178 0 00-4.982-5.657A58.192 58.192 0 0032 21.361a58.192 58.192 0 00-5.657 4.982A58.192 58.192 0 0021.361 32zm7.223-13.042c-1.697-1.083-3.34-1.963-4.872-2.62-2.101-.9-3.9-1.34-5.304-1.38-1.398-.039-2.21.316-2.671.778-.463.463-.818 1.274-.779 2.672.04 1.404.48 3.203 1.38 5.304.657 1.533 1.537 3.175 2.62 4.872a62.984 62.984 0 014.557-5.07 62.984 62.984 0 015.07-4.556zm6.832 0a62.95 62.95 0 015.07 4.557 62.984 62.984 0 014.556 5.07c1.083-1.698 1.963-3.34 2.62-4.873.9-2.101 1.34-3.9 1.38-5.304.039-1.398-.316-2.21-.779-2.672-.462-.462-1.273-.817-2.671-.778-1.404.04-3.203.48-5.304 1.38-1.533.657-3.174 1.537-4.872 2.62zm9.626 16.458a62.984 62.984 0 01-4.557 5.07 62.984 62.984 0 01-5.07 4.556c1.699 1.083 3.34 1.963 4.873 2.62 2.101.9 3.9 1.34 5.304 1.38 1.398.039 2.21-.316 2.672-.779.462-.462.817-1.273.778-2.671-.04-1.404-.48-3.203-1.38-5.304-.657-1.533-1.537-3.174-2.62-4.872z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ComponentIcon;
/* prettier-ignore-end */