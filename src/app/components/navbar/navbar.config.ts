export const navbarMenuItems = [
  {
    label:  'Forms',
    link: '/forms',
    icon: {
      src: 'assets/icons/list.svg',
      width: 19,
      height: 16,
      alt: 'forms icon'
    },
    isActive: () => {
      return false;
    }
  },
  {
    label:  'Customers',
    link: '/customers',
    icon: {
      src: 'assets/icons/users.svg',
      width: 22,
      height: 14,
      alt: 'customers icon'
    },
    isActive: () => {
      return false;
    }
  },
  {
    label:  'Submissions',
    link: '/submissions',
    icon: {
      src: 'assets/icons/submissions.svg',
      width: 18,
      height: 20,
    },
    isActive: (currentRoute: string) => {
      return currentRoute === '/'
        || currentRoute === '/map'
        || currentRoute === '/list'
        || currentRoute.includes('/submissions');
    }
  },
  {
    label:  'History',
    link: '/history',
    icon: {
      src: 'assets/icons/history.svg',
      width: 21,
      height: 18,
      alt: 'history icon'
    },
    isActive: () => {
      return false;
    }
  },
  {
    label:  'Reports',
    link: '/reports',
    icon: {
      src: 'assets/icons/chart.svg',
      width: 20,
      height: 18,
      alt: 'reports icon'
    },
    isActive: () => {
      return false;
    }
  },
  {
    label:  'Workflow',
    link: '/workflow',
    icon: {
      src: 'assets/icons/chart.svg',
      width: 20,
      height: 18,
      alt: 'workflow icon'
    },
    isActive: () => {
      return false;
    }
  }
];