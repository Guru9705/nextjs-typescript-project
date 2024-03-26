// components/LeftPage.tsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeftPageProps {
  data: any;
}

const LeftPage: React.FC<LeftPageProps> = ({ data }) => {
  return (
    <div>
      <h2>Left Page</h2>
      {data &&
        data.boards.map((x: any) => {
          return (
            <Card>
              <CardHeader>
                <CardTitle>{x.name}</CardTitle>
                {x.bcfs &&
                  x.bcfs.map((bcf: any) => {
                    return (
                      <Card>
                        <CardHeader>
                          <CardTitle>{bcf.name}</CardTitle>
                        </CardHeader>
                        {bcf &&
                          bcf.bcfBoards.map((board: any) => {
                            return <CardContent>{board.name}</CardContent>;
                          })}
                      </Card>
                    );
                  })}
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
};

export default LeftPage;
