import Image from 'next/image';
//
// export default function Avatar({ name, picture }) {
//   return (
//     <div className="flex items-center">
//       <div className="w-12 h-12 relative mr-4">
//         <Image src={picture.url} layout="fill" className="rounded-full" alt={name} />
//       </div>
//       <div className="text-xl font-bold">{name}</div>
//     </div>
//   );
// }

import * as React from 'react';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

export interface AvatarComponentProps {
  name: string | undefined;
  avatarPicture: string | undefined;
}

const AvatarComponent: FC<AvatarComponentProps> = ({ name, avatarPicture }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ pt: 3 }}>
      <Avatar alt={name} src={avatarPicture} sx={{ width: 36, height: 36 }} />
    </Stack>
  );
};

export default AvatarComponent;
