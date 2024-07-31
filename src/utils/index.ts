type ButtonGroupType = {
  type: string;
  buttonDisplay: string[];
};

type ButtonGroupDisplayType = {
  origination: ButtonGroupType;
  projectCharter: ButtonGroupType;
};

export const ButtonGroupDisplay: ButtonGroupDisplayType = {
  origination: {
    type: "Origination",
    buttonDisplay: ["Overview", "Modify", "Disposition", "History"],
  },
  projectCharter: {
    type: "Project Charter",
    buttonDisplay: ["Overview", "Modify", "Disposition", "History"],
  },
};