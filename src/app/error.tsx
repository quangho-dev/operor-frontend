"use client";

import { Button, Stack, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginTop: "5rem" }}
      spacing={3}
    >
      <Typography variant="h4">Something went wrong!</Typography>
      <Button onClick={() => reset()} variant="contained">Try again</Button>
    </Stack>
  );
}
