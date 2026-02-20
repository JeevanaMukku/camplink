import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-deck-swiper";
import API from "../services/api";
import SwipeCard from "../components/SwipeCard";

export default function SwipeScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data));
  }, []);

  const onSwipeRight = (index) => {
    const user = users[index];
    API.post("/swipe", {
      swipedId: user.id,
      action: "right"
    });
  };

  return (
    <View style={{ flex:1 }}>
      <Swiper
        cards={users}
        renderCard={(card) => <SwipeCard user={card} />}
        onSwipedRight={onSwipeRight}
        backgroundColor="#fff"
      />
    </View>
  );
}
