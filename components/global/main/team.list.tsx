import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import { Item } from './items';
import { Codesandbox } from 'lucide-react';

// Dummy array of teams
const dummyTeams = [
  { id: '1', name: 'Unbeatables' },
  { id: '2', name: 'Humble' },
  { id: '3', name: 'kokaku' },
];

export const TeamList = () => {
    const router = useRouter(); // Initialize useRouter hook
  
    const generateRandomId = () => {
      const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomId = '';
      for (let i = 0; i < 10; i++) {
        randomId += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
      }
      return randomId;
    };
  
    const generateRandomTeamName = () => {
      const adjectives = ['Swift', 'Brave', 'Epic', 'Smart', 'Cool', 'Great', 'Daring', 'Lucky'];
      const nouns = ['Lions', 'Tigers', 'Bears', 'Wolves', 'Hawks', 'Foxes', 'Eagles', 'Sharks'];
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      return `${adjective} ${noun}`;
    };
  
    const generateTeams = () => {
      const teams = [];
      const ids = new Set(); // Use a set to ensure uniqueness of IDs
      while (teams.length < 8) {
        const id = generateRandomId();
        if (!ids.has(id)) { // Check if the generated ID is unique
          ids.add(id);
          const name = generateRandomTeamName();
          teams.push({ id, name });
        }
      }
      return teams;
    };
  
    const teams = generateTeams(); // Generate teams with random IDs and names
  
    const onRedirect = () => {
      router.push(`/teams/QzNl6zJ9oH`);
    };
  
    return (
      <>
        {teams.map((team) => (
          <div key={team.id}>
            <Item
              onClick={() => onRedirect()}
              label={team.name}
              icon={Codesandbox}
            />
          </div>
        ))}
      </>
    );
  };
  