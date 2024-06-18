import { User } from "@/types";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Users.module.css";

export interface UsersProps {
  users: User[] | null;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <Stack spacing={2}>
      {users &&
        users.map((user) => (
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography>
                  <span className={styles.label}>Id: </span>
                  {user.id}
                </Typography>
                <Typography>
                  <span className={styles.label}>First name: </span>
                  {user.first_name}
                </Typography>
                <Typography>
                  <span className={styles.label}>Last name: </span>
                  {user.last_name}
                </Typography>
                <Typography>
                  <span className={styles.label}>Email: </span>
                  {user.email}
                </Typography>
                <Typography>
                  <span className={styles.label}>Days: </span>
                  {user.days}
                </Typography>

                <Box>
                  <span className={styles.label}>Meeting days: </span>
                  {!user.meeting_days.length ? (
                    <Typography>There is no meeting days</Typography>
                  ) : (
                    <Stack direction={"row"} spacing={1}>
                      {user.meeting_days.map((meeting_day) => (
                        <Chip label={meeting_day} />
                      ))}
                    </Stack>
                  )}
                </Box>

                <Typography>
                  <span className={styles.label}>Days without meetings: </span>
                  {user.days_without_meetings}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
    </Stack>
  );
};

export default Users;
