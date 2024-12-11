import { Home, Compass, Users, Music, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black/90 backdrop-blur-lg flex flex-col items-center py-4 gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <Button variant="ghost" size="sm">
          <Home className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="sm">
          <Compass className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="sm">
          <Users className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="sm">
          <Music className="w-6 h-6" />
        </Button>
      </div>
      <Button variant="primary" size="sm">
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
}