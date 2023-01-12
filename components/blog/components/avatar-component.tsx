import Image from 'next/image';
//
// export default function Avatar({ name, picture }) {
//   return (
//     <Box className="flex items-center">
//       <Box className="w-12 h-12 relative mr-4">
//         <Image src={picture.url} layout="fill" className="rounded-full" alt={name} />
//       </Box>
//       <Box className="text-xl font-bold">{name}</Box>
//     </Box>
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
