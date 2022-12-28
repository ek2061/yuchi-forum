import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import React from "react";
import { stringToColor } from "utils/palette";

export const UserInfo: React.FC<{}> = () => {
  const { data: session } = useSession();
  const { uid = "unknown", nickname = "Unknown" } = session?.user ?? {};

  return (
    <Stack direction="row">
      <Stack mr={1}>
        <Typography variant="subtitle2" align="right" sx={{ color: "#d8d2c9" }}>
          {nickname}
        </Typography>
        <Typography variant="body2" align="right" sx={{ color: "#9f9687" }}>
          @{uid}
        </Typography>
      </Stack>
      <Avatar sx={{ bgcolor: stringToColor(nickname) }}>{nickname[0]}</Avatar>
    </Stack>
  );
};
