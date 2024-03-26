'use client'
import { useState, useEffect } from 'react';
import LeftPage from "@/components/LeftPage";
import RightPage from "@/components/RightPage";

export default function Home() {
  const [leftData, setLeftData] = useState<any>(null);
  const [rightData, setRightData] = useState<any>(null);

  useEffect(() => {
    const fetchLeftData = async () => {
      try {
        const response = await fetch('https://demo6396395.mockable.io/bcf-boards');
        const data = await response.json();
        setLeftData(data);
      } catch (error) {
        console.error('Error fetching left data:', error);
      }
    };
    const fetchRightData = async () => {
      try {
        const response = await fetch('https://demo6396395.mockable.io/prompts');
        const data = await response.json();
        setRightData(data);
      } catch (error) {
        console.error('Error fetching right data:', error);
      }
    };

    fetchLeftData();
    fetchRightData();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LeftPage data={leftData} />
      <RightPage data={rightData} />
    </main>
  );
}
