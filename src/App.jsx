import { ReactComponent as HeartFilled } from './assets/heart-filled.svg';
import { ReactComponent as HeartOutline } from './assets/heart-outline.svg';
import { ReactComponent as LikeFilled } from './assets/like-filled.svg';
import { ReactComponent as LikeOutline } from './assets/like-outline.svg';
import { ReactComponent as StarFilled } from './assets/star-filled.svg';
import { ReactComponent as StarOutline } from './assets/star-outline.svg';

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <HeartFilled className="h-16 w-16 text-rose-600" />
      <HeartOutline className="h-12 w-12 text-pink-600" />
      <LikeFilled className="h-10 w-10 text-fuchsia-600" />
      <LikeOutline className="h-10 w-10 text-purple-600" />
      <StarFilled className="h-12 w-12 text-violet-600" />
      <StarOutline className="h-16 w-16 text-indigo-600" />
    </div>
  );
}

export default App;
