"use client";

import { ReactElement, useEffect, useState } from "react";
import { HorizontalBar } from "../navigation/HorizontalBar";
import { RecentFeedList } from "./RecentFeedList";
import * as styles from "./RecentFeed.css";

export const RecentFeed = (): ReactElement => {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(false);
  }, []);

  return (
    <div className={styles.recentFeedLayout}>
      <div className={styles.recentFeedTitlWrapper}>
        <p>최근 여행한 기록</p>
      </div>
      <HorizontalBar>
        <RecentFeedList pending={pending} recentFeedList={[]} />
      </HorizontalBar>
    </div>
  );
};
