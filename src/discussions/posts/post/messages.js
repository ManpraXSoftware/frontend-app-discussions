import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  lastResponse: {
    id: 'discussions.post.lastResponse',
    defaultMessage: 'Last response {time}',
  },
  postedOn: {
    id: 'discussions.post.postedOn',
    defaultMessage: 'Posted {time} by {author} {authorLabel}',
  },
  contentReported: {
    id: 'discussions.post.contentReported',
    defaultMessage: 'Content reported for staff review',
  },
  following: {
    id: 'discussions.post.following',
    defaultMessage: 'Following',
  },
  follow: {
    id: 'discussions.post.follow',
    defaultMessage: 'Follow',
    description: 'Tooltip/alttext for button to follow a discussion post',
  },
  answered: {
    id: 'discussions.post.answered',
    defaultMessage: 'Answered',
    description: 'Tooltip/alttext for button to unfollow a discussion post',
  },
  unfollow: {
    id: 'discussions.post.unfollow',
    defaultMessage: 'Unfollow',
    description: 'Tooltip/alttext for button to unfollow a discussion post',
  },
  like: {
    id: 'discussions.post.like',
    defaultMessage: 'Like',
    description: 'Tooltip/alttext for button to like a discussion post',
  },
  removeLike: {
    id: 'discussions.post.removeLike',
    defaultMessage: 'Remove like',
    description: 'Tooltip/alttext for button to remove the like applied to a discussion post',
  },
  postClosed: {
    id: 'discussions.post.closed',
    defaultMessage: 'Post closed for responses and comments',
    description: 'Tooltip/alttext for icon displayed when post is closed',
  },

});

export default messages;
