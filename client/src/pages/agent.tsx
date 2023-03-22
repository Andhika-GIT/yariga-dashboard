import { useList } from '@pankod/refine-core';
import { Box, Typography } from '@pankod/refine-mui';

import { AgentCard } from 'components';

const Agent = () => {
  const { data, isLoading, isError } = useList({
    resource: 'users',
  });

  const allAgents = data?.data ?? [];

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  console.log(allAgents);

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agent list
      </Typography>

      <Box
        mt="2opx"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          backgroundColor: '#fcfcfc',
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard key={agent._id} id={agent._id} name={agent.name} email={agent.email} avatar={agent.avatar} noOfProperties={agent.allProperties.length} />
        ))}
      </Box>
    </Box>
  );
};

export default Agent;
