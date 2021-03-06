import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.TooltipProps & {
  width: number;
  height: number;
};

export class Tooltip extends React.Component<Props> {
  render() {
    return <System.Tooltip {...this.props}>{this.props.text}</System.Tooltip>;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50,
    text: "Components"
  };

  static propertyControls: PropertyControls<Props> = {
    arrow: {
      title: "Arrow",
      options: ["top", "right", "bottom", "left"],
      optionTitles: ["Top", "Right", "Bottom", "Left"],
      type: ControlType.Enum
    },
    error: { title: "Error", type: ControlType.Boolean },
    text: { title: "Text", type: ControlType.String }
  };
}
