import VideoItem from './VideoItem';
import ArticleItem from './ArticleItem';
import ViewStatus from './ViewStatus';
import { nanoid } from 'nanoid';

export default function List(props) {
  const VideoItemWithStatus = ViewStatus(VideoItem);
  const ArticleItemWithStatus = ViewStatus(ArticleItem);

  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
            <VideoItemWithStatus {...item} key={nanoid()}/>
        );

      case 'article':
        return (
            <ArticleItemWithStatus {...item} key={nanoid()}/>
        );

      default:
        return null;
    }
  });
};
