import { globalAttractions } from '@/service/homePage';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './attraction.module.css';

export default function GlobalAttractions() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{ borderBottom: '1px solid #dddddd', marginBottom: '15px' }}
      >
        {globalAttractions.map((Destname, i) => (
          <Tab label={Destname.name} key={i} className="normal-case" />
        ))}
      </Tabs>
      {globalAttractions.map(
        (dist, i) =>
          value === i && (
            <ul key={i} className={style.attralistContainer}>
              {dist.visitList.map((data, index) => (
                <li key={index} className={style.attraCard}>
                  <Link href={data.url} className={`${style.attrlist}`}>
                    <Image
                      src={data.imagePath}
                      alt={data.altName}
                      height={150}
                      width={255}
                      className={style.attraImg}
                    />
                    <p className={style.attname}>{data.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )
      )}
    </div>
  );
}
