"use client"

import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { User } from "@/types";
import { fetchUsers } from "@/actions/fetch-users";
import CircularProgress from "@mui/material/CircularProgress";
import Users from "./Users";
import { Box, Typography } from "@mui/material";

const LoadingMore = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [offset, setOffset] = useState(0);
  const [isMore, setIsMore] = useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreUsers = async () => {
    await delay(1000);
    const nextOffset = offset + 10;
    const newUsers = (await fetchUsers(nextOffset)) ?? [];

    if (newUsers.length === 0) {
      setIsMore(false);
    }

    setUsers((prevUsers: User[]) => [...prevUsers, ...newUsers]);
    setOffset(nextOffset);
  };

  useEffect(() => {
    if (inView && isMore) {
      loadMoreUsers();
    }
  }, [inView]);

  return (
    <>
      <Users users={users} />
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "1em",
        }}
        ref={ref}
      >
        {isMore ? (
          <CircularProgress />
        ) : (
          <Typography>No more user is available</Typography>
        )}
      </Box>
    </>
  );
};

export default LoadingMore;
