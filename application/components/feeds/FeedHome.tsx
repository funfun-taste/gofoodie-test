"use client";

import { useState } from "react";
import { FeedList } from "./FeedList";

export const FeedHome = () => {
  const [pending, setPending] = useState(true);
  return (
    <div>
      <FeedList pending={pending} feedList={[]} />
    </div>
  );
};
