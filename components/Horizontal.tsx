import Stack, { StackProps } from "@mui/material/Stack";

const Horizontal: React.FC<StackProps> = (props) => {
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

const HorizontalStart: React.FC<StackProps> = (props) => (
  <Horizontal justifyContent="flex-start" {...props} />
);

const HorizontalCenter: React.FC<StackProps> = (props) => (
  <Horizontal justifyContent="center" {...props} />
);

const HorizontalBetween: React.FC<StackProps> = (props) => (
  <Horizontal justifyContent="space-between" {...props} />
);

const HorizontalEnd: React.FC<StackProps> = (props) => (
  <Horizontal justifyContent="flex-end" {...props} />
);

export { HorizontalStart, HorizontalCenter, HorizontalBetween, HorizontalEnd };
