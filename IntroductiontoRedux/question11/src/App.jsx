import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches, toggleFavorite } from "./redux/match/actions";
import {
  Box,
  Input,
  Spinner,
  SimpleGrid,
  Button,
  Heading,
  Badge
} from "@chakra-ui/react";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches, favorites } = useSelector(
    (state) => state.matches
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const filteredMatches = footballMatches.filter((match) =>
    [match.team1, match.team2, match.venue].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <Box p={5}>
      <Heading mb={4}>⚽ Football Match Tracker</Heading>
      <Input
        placeholder="Search by team or venue"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />

      {isLoading && <Spinner />}
      {isError && <Box color="red.400">Error fetching matches.</Box>}

      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {filteredMatches.map((match) => (
          <Box
            key={match.match_id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="md"
          >
            <Heading size="sm">
              {match.team1} vs {match.team2}
            </Heading>
            <Badge colorScheme="purple">{match.venue}</Badge>
            <Box>Date: {match.date}</Box>
            <Button
              mt={2}
              colorScheme={favorites.includes(match.match_id) ? "yellow" : "blue"}
              onClick={() => dispatch(toggleFavorite(match.match_id))}
            >
              {favorites.includes(match.match_id) ? "Unfavorite" : "Favorite"}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
