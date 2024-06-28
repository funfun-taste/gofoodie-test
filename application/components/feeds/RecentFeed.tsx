import { ReactElement } from "react";
import { HorizontalBar } from "../navigation/HorizontalBar";
import { RecentFeedList } from "./RecentFeedList";

export const RecentFeed = (): ReactElement => {
  return (
    <div>
      <p>최근 여행한 기록</p>
      <HorizontalBar>
        <RecentFeedList pending={false} recentFeedList={[]} />
      </HorizontalBar>
    </div>
  );
};
