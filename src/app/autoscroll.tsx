import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

interface AutoScrollClientsProps {
  clients: Client[];
}

export default function AutoScrollClients({ clients }: AutoScrollClientsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstChild as HTMLElement;
      let animationId: number;

      const scroll = () => {
        // Scroll the container
        if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to start
        } else {
          scrollContainer.scrollLeft += 1; // Scroll to the right
        }
        animationId = requestAnimationFrame(scroll); // Continue animation
      };

      animationId = requestAnimationFrame(scroll); // Start the animation

      return () => cancelAnimationFrame(animationId); // Cleanup on component unmount
    }
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={scrollRef}>
      <div className="flex whitespace-nowrap">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="inline-flex items-center justify-center min-w-[200px] h-20 mx-4">
            <Image
              src={client.logo}
              alt={client.name}
              width={150}
              height={60}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}