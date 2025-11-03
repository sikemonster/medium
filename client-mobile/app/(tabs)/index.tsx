
import SectionList, { Item } from '@/lib/ui/SectionList';
import { Surface } from '@/lib/ui/Surface';


const sections: Array<{
  title: string,
  data: Array<Item>
}> = [
    {
      title: 'Components',
      data: [{
        label: "Chat",
        screen: "./chat"
      }
        , {
        label: "Map",
        screen: "./map"
      },
      {
        label: "Stripe Payment",
        screen: './stripe'

      }],
    },
  ];


export default function TabOneScreen() {


  return (
    <Surface flex={1} bg='#eee' px={20} py={20}>
      <SectionList data={sections} />
    </Surface>
  );
}




