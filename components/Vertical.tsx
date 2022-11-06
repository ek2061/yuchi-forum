import Stack, { StackProps } from "@mui/material/Stack";

const Vertical: React.FC<StackProps> = (props) => (
  <Stack direction="column" {...props}>
    {props.children}
  </Stack>
);

Vertical.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  sx: { width: "100%", height: "100%" },
};

const VerticalStart: React.FC<StackProps> = (props) => (
  <Vertical justifyContent="flex-start" {...props} />
);

const VerticalCenter: React.FC<StackProps> = (props) => (
  <Vertical justifyContent="center" {...props} />
);

const VerticalBetween: React.FC<StackProps> = (props) => (
  <Vertical justifyContent="space-between" {...props} />
);

const VerticalEnd: React.FC<StackProps> = (props) => (
  <Vertical justifyContent="flex-end" {...props} />
);

export { VerticalStart, VerticalCenter, VerticalBetween, VerticalEnd };
