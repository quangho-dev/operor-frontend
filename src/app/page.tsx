import { fetchUsers } from "@/actions/fetch-users";
import LoadingMore from "@/components/LoadingMore";
import Users from "@/components/Users";
import { Container, Stack, Typography } from "@mui/material";

export default async function Home() {
  const users = await fetchUsers(0)

  return (
    <Container sx={{ paddingY: "1em" }}>
      <Stack alignItems={"center"} spacing={1}>
        <Typography variant="h4">User list</Typography>

        <Users users={users} />

        <LoadingMore />
      </Stack>
    </Container>
  );
}
