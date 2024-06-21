import {KakaoMap} from "@/components/kakao/KakaoMap";
import * as styles from './page.css';
import {FeedSkeleton} from "@/components/common/skeleton/FeedSkeleton";


export default async function Home() {
  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap />
      <div>
        <FeedSkeleton isLoading={true} />
        <FeedSkeleton isLoading={true} />
        <FeedSkeleton isLoading={true} />
        <FeedSkeleton isLoading={true} />
        <FeedSkeleton isLoading={true} />
      </div>
    </div>
  );
}
