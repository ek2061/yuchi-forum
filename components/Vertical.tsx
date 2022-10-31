import Stack, { StackProps } from "@mui/material/Stack";

const Vertical = (props: StackProps) => (
  <Stack direction="column" {...props}>
    {props.children}
  </Stack>
);

Vertical.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  sx: { width: "100%", height: "100%" },
};

const VerticalStart = (props: StackProps) => (
  <Vertical justifyContent="flex-start" {...props} />
);

const VerticalCenter = (props: StackProps) => (
  <Vertical justifyContent="center" {...props} />
);

const VerticalBetween = (props: StackProps) => (
  <Vertical justifyContent="space-between" {...props} />
);

const VerticalEnd = (props: StackProps) => (
  <Vertical justifyContent="flex-end" {...props} />
);

export { VerticalStart, VerticalCenter, VerticalBetween, VerticalEnd };
