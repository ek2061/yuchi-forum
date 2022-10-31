import Stack, { StackProps } from "@mui/material/Stack";

const Horizontal = (props: StackProps) => {
  return (
    <Stack direction="row" {...props}>
      {props.children}
    </Stack>
  );
};

Horizontal.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  sx: { width: "100%", height: "100%" },
};

const HorizontalStart = (props: StackProps) => (
  <Horizontal justifyContent="flex-start" {...props} />
);

const HorizontalCenter = (props: StackProps) => (
  <Horizontal justifyContent="center" {...props} />
);

const HorizontalBetween = (props: StackProps) => (
  <Horizontal justifyContent="space-between" {...props} />
);

const HorizontalEnd = (props: StackProps) => (
  <Horizontal justifyContent="flex-end" {...props} />
);

export { HorizontalStart, HorizontalCenter, HorizontalBetween, HorizontalEnd };
