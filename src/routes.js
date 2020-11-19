import Note from './components/Note.vue';
import NotesList from './components/NotesList.vue';
import Deleted from './components/deleted.vue';
import Favourites from './components/favourites.vue';
export const routes = [
  {
    path: '/note',
    component: Note,
    meta: {
      metaTags: [
        {
          name: 'Note',
          content: 'Individual note',
        }
      ],
    }
  },
  {
    path: '/noteslist',
    component: NotesList,
    meta: {
      metaTags: [
        {
          name: 'Note List',
          content: 'List of Notes',
        }
      ],
    }
  },
  {
    path: '/favourites',
    component: Favourites,
    meta: {
      metaTags: [
        {
          name: 'Note List',
          content: 'List of favourite notes',
        }
      ],
    }
  },
  {
    path: '/deleted',
    component: Deleted,
    meta: {
      metaTags: [
        {
          name: 'Deleted notes',
          content: 'List of deleted notes',
        }
      ],
    }
  },
]
