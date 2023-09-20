// import { Box, SvgIcon, Typography, styled } from "@mui/material";
import { useState } from "react";
import './InfoEditor.css';
import {KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons';
// const Counter = styled(Typography)(({ theme }) => ({
//   width: 32,
//   height: 32,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: 4,
//   top: 4,
//   border: `1px solid ${theme.colors.divider.light}`,
//   position: "absolute",
// }));

// const DataViewBox = styled(Box)(({ theme }) => ({
//   height: 32,
//   //display: "flex",
//   alignItems: "center",
//   flexGrow: 1,
//   gap: 8,
//   borderRadius: 4,
//   border: `1px solid ${theme.colors.divider.light}`,
//   paddingInline: 8,
//   marginTop: 4,
//   alignContent: "center",
//   display: "grid",
//   gridTemplateColumns: "auto auto auto 1fr",
// }));

// const CustomChip = styled(Typography)(({ theme }) => ({
//   borderRadius: 2,
//   padding: "2px 4px",
//   backgroundColor: "#E9F5F2",
//   color: "#1F9981",
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   textOverflow: "ellipsis",
// }));

// const Path = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   width: 20,
//   height: 36,
//   top: -11,
//   borderBottom: `2px solid ${theme.colors.divider.light}`,
//   borderBottomLeftRadius: 4,
// }));

// const Line = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   height: "calc(100% - 13px)",
//   borderLeft: `2px solid ${theme.colors.divider.light}`,
//   width: 1,
// }));

const isJSONString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const isObject = (value: any) =>
  (typeof value === "object" && value !== null && value != undefined) ||
  Array.isArray(value) ||
  isJSONString(value);

const Items = ({ data, level, counterObj, parentKey, onChange }: any) => {
  let parsedData = data;
  try {
    if (typeof data === "string") {
      parsedData = JSON.parse(data);
    }
  } catch (e) {
    // not a json string;
  }
  return (
    <>
      <div className="position-relative element-box">
        {level > 1 && (
          <div className="line"
            style={{
              left: `${40 * level - 20}px`,
            }}
          ></div>
        )}
        {
          Array.isArray(parsedData)?<>
          {parsedData.map((ele, i) => (
          <div className="array-box">
            <button className="delete-btn btn" onClick={() => {
                const newData = [...data];
                newData.splice(i, 1);
                onChange(newData);
              }}>X</button>
          <ObjectValue
              key={i}
              itemKey={i.toString()}
              itemValue={ele}
              level={level}
              counterObj={counterObj}
              parentKey={parentKey}
              onChange={(newVal: any) => {
                const newData = [...data];
                newData[i] = newVal;
                onChange(newData);
              }}
            />
            </div>
          ))}
          <button className="add-btn" style={{
            marginLeft: `${40 * level}px`
          }} onClick={() => {
            console.log(parentKey);
            onChange([...data, parsedData[0]]);
        }}>
          Add
        </button>
          </>
          : Object.entries(parsedData).map(([key, value]) => {
          return (
            <ObjectValue
              key={key}
              itemKey={key}
              itemValue={value}
              level={level}
              counterObj={counterObj}
              parentKey={parentKey}
              onChange={(newVal: any) => {
                onChange({ ...data, [key]: newVal });
              }}
            />
          );
        })}
      </div>
    </>
  );
};

const ObjectValue = ({
  itemKey,
  itemValue,
  level = 1,
  counterObj,
  parentKey,
  onChange,
}: any) => {
  const [open, setOpen] = useState<boolean>(
    parentKey?.startsWith("spec") || itemKey?.startsWith("spec")
  );
  const key = parentKey ? `${parentKey}_${itemKey}` : itemKey;
  const isItemValueObject: boolean = isObject(itemValue);
  return (
    <div className="position-relative">
      {level > 1 && (
        <div
          className="path"
          style={{
            left: `${40 * level - 20}px`,
          }}
        ></div>
      )}
      <div className="d-flex position-relative">
        <span className="counter">{counterObj[key]}</span>
        <div
          style={{
            marginLeft: `${40 * level}px`,
            background: isItemValueObject ? '#F8F9FA' : undefined,
          }}
          onClick={() => isItemValueObject && setOpen((x) => !x)}
          className={'data-view-box' + (isItemValueObject ? " cursor-pointer" : " padding-block-10")}
        >
          {isItemValueObject && (
            <span>
              {open ? <KeyboardArrowDown/> : <KeyboardArrowRight/>}
            </span>
          )}
          <span
            color={isItemValueObject ? "#2D7DEE" : undefined}
          >
            {itemKey}:
          </span>
          {!isItemValueObject ? (
            <textarea  
              value={itemValue || ''} 
              onChange={e => {
                onChange(e.target.value);
              }} 
      ></textarea>
            // <span className="chip">{itemValue}</span>
          ) : (
            <span color={"#EF7C30"}>
              {Array.isArray(itemValue) ? "[ ]" : "{ }"}
            </span>
          )}
          {isItemValueObject && (
            <span
              color="#747B86"
              style={{
                textAlign: "end",
              }}
            >
              {Array.isArray(itemValue) ? "[ " : "{ "}
              {Object.keys(counterObj).filter((x: string) => x.startsWith(key))
                .length - 1}
              {Array.isArray(itemValue) ? " ]" : " }"}
            </span>
          )}
        </div>
      </div>
      {open && isItemValueObject && (
        <div>
          <Items
            data={itemValue}
            level={level + 1}
            counterObj={counterObj}
            parentKey={key}
            onChange={onChange}
          ></Items>
        </div>
      )}
    </div>
  );
};

export default function InfoEditor({ data, setData }: any) {
  // const [state, setState] = useState(data);
  // The result object to be populated
  let result: any = {};

  // Index counter for the entire JSON
  let globalIndex = 1;

  // Recursive function to traverse the JSON
  const traverse = (obj: any, prevKey: string | null = null) => {
    if (typeof obj === "object" && obj !== null) {
      for (const key in obj) {
        // Construct the key by appending to the previous key
        const newKey = prevKey ? `${prevKey}_${key}` : key;

        // Add to the result object with the global index
        result[newKey] = globalIndex++;

        // If the value is another object or array, traverse deeper
        if (isObject(obj[key])) {
          let parsedString = obj[key];
          try {
            parsedString = JSON.parse(obj[key]);
          } catch (error) {
            // Not a stringified JSON, so just continue
          }
          traverse(parsedString, newKey);
        }
      }
    }
  };
  traverse(data, null);
  return <div className="editor-box">
    <Items data={data} onChange={(newState: any) => setData(newState)} counterObj={result}></Items>
    <button style={{
      border: '1px solid rgb(234, 236, 238)',
      marginTop: 20,
      width: 300,
      height: 50,
      background: 'rgb(240, 203, 49)',
      alignSelf: 'center',
      borderRadius: 8
    }}>Generate CV</button>
  </div>;
}
