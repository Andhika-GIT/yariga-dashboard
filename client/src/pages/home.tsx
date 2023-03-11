import { Box, Typography, Stack } from '@pankod/refine-mui';
import { useList } from '@pankod/refine-core';

// components
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components';

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Properties For Sale" value={684} series={[75, 25]} colors={['#475be8', '#c4e8ef']} />
        <PieChart title="Properties For Rent" value={550} series={[60, 40]} colors={['#475bf8', '#c4e8ef']} />
        <PieChart title="Total Customers" value={5684} series={[75, 25]} colors={['#576be8', '#c4e8ef']} />
        <PieChart title="Properties For Cities" value={555} series={[75, 25]} colors={['#475be8', '#c4e8ef']} />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;
