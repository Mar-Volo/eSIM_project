import { useState, useEffect } from "react";
import EsimItem from "./EsimItem/EsimItem";
import styles from "./EsimList.module.scss";

import poland from "../../images/countries/poland/poland.png";
import germany from "../../images/countries/germany/germany.png";
import turkey from "../../images/countries/turkey/turkey.png";
import uk from "../../images/countries/uk/uk.png";

const Countries = [
  { id: "sdgfd", url: poland, countrieName: "Poland" },
  { id: "hjghj", url: uk, countrieName: "United Kingdom" },
  { id: "ghjgh", url: turkey, countrieName: "Turkey" },
  { id: "kljkl", url: germany, countrieName: "Germany" },
  { id: "erweg", url: germany, countrieName: "Germany" },
  { id: "nmbvb", url: turkey, countrieName: "Turkey" },
  { id: "uiyui", url: uk, countrieName: "England" },
  { id: "hjkjh", url: poland, countrieName: "Poland" },
  { id: "ds;lg", url: uk, countrieName: "England" },
  { id: "roprt", url: poland, countrieName: "Poland" },
  { id: "poigh", url: germany, countrieName: "Germany" },
  { id: "m,jhy", url: turkey, countrieName: "Turkey" },
  { id: "m,myu", url: poland, countrieName: "Poland" },
  { id: "rtfjh", url: turkey, countrieName: "Turkey" },
  { id: "k;lio", url: germany, countrieName: "Germany" },
  { id: "nmjkh", url: uk, countrieName: "England" },
];

const EsimList = () => {
  const [countrieGroups, setCountrieGroup] = useState([]);
  const [groupSize, setGroupsize] = useState(4);
  const { esimList } = styles;
  const craeteGroups = (arr) => {
    const groupsArr = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      const group = arr.slice(i, i + groupSize);
      groupsArr.push(group);
    }
    return groupsArr;
  };
  useEffect(() => {
    const groupsList = craeteGroups(Countries)
    setCountrieGroup(groupsList);
  }, []);
  console.log(countrieGroups);
  return (
    <ul className={esimList}>
      {countrieGroups.map((group, index) => {
        return <EsimItem key={index} group={group} />;
      })}
    </ul>
  );
};

export default EsimList;
