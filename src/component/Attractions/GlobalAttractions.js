import { globalAttractions } from '@/service/homePage';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function GlobalAttractions() {
  console.log('first');
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        {globalAttractions.map((Destname, i) => (
          <Tab label={Destname.name} key={i} className="normal-case" />
        ))}
      </Tabs>
      {globalAttractions.map(
        (dist, i) =>
          value === i && (
            <div key={i} className="flex flex-wrap py-[20px] ">
              {dist.visitList.map((data, index) => (
                <div key={index} className="rounded-lg relative px-[10px]">
                  <Link href={data.url} className="block">
                    <Image
                      src={data.imagePath}
                      width={200}
                      height={200}
                      alt={data.altName}
                    />
                    <p className="absolute bottom-[10px] left-[40%] text-[#fff] size-[700] translate-x-[-40%]">
                      {data.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
}
