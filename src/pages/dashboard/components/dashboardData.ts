import userIcon from "../../../assets/images/userIcon.png";
import userActive from "../../../assets/images/userActive.png";
import userLoans from "../../../assets/images/userLoans.png";
import userSavings from "../../../assets/images/userSavings.png";
import filterIcon from "../../../assets/images/filter.png"




export const userTypes = [
  {
    id: 1,
    header: 'Users',
    children: [
      {
        id: 1.1,
        icon: userIcon, 
        item: 'users',
        count: 2453,
      },
      {
        id: 1.2,
        icon: userActive,
        item: 'active users',
        count: 2453,
      },
      {
        id: 1.3,
        icon: userLoans,
        item: 'users with loans',
        count: 2453,
      },
      {
        id: 1.4,
        icon: userSavings,
        item: 'users with savings',
        count: 102453,
      },
    ],
  },
];

export const userChart = [
  {
       heading: 'organization',
       icon: filterIcon
  },
  {
       heading: 'username',
       icon: filterIcon
  },
  {
       heading: 'email',
       icon: filterIcon
  },
  {
       heading: 'phone number',
       icon: filterIcon
  },
  {
       heading: 'date joined',
       icon: filterIcon
  },
  {
       heading: 'status',
       icon: filterIcon
  },
];
