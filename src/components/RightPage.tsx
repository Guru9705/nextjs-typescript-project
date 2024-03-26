// components/RightPage.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RightPageProps {
  data: any;
}

const RightPage: React.FC<RightPageProps> = ({ data }) => {
  return (
    <div>
      <h2>Right Page</h2>
            {data && data.map((x:any)=>{
              return <Card><CardContent>
               {x.name}
           </CardContent></Card>
            })}
    </div>
  );
};

export default RightPage;
