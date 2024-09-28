import React from 'react';
// import Image from 'next/image';

type TableColumn = {
  header: string;
  data: (string | React.ReactNode)[];
};

type TableProps = {
  columns: TableColumn[];
};

const Table: React.FC<TableProps> = ({ columns }) => {
  return (
    <div className="overflow-x-auto w-[82%] m-auto">
      <table className="min-w-full border-separate" style={{ borderSpacing: '0', borderRadius: '1.25rem', overflow: 'hidden' }}>
        <thead className="bg-[#D9D9D9]">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`py-4 px-6 ${index === 0 ? 'text-[#E45D25]' : 'text-[#1E1E1E]'}`}
                style={{
                  textAlign: 'center',
                  fontSize: '1.125rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '167%',
                  width: index === 0 ? '30%' : '23.33%', // First column takes 30%, the rest take equal parts of the remaining 70%
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {columns[0].data.map((_, rowIndex) => (
            <tr key={rowIndex} className="bg-white">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-4 px-6 ${colIndex === 0 ? 'text-[#E45D25]' : ''}`}
                  style={{
                    textAlign: 'center',
                    fontSize: '1.125rem',
                    fontStyle: 'normal',
                    fontWeight: colIndex === 0 ? 500 : 400,
                    lineHeight: '167%',
                    borderBottom: '1px solid rgba(154, 154, 154, 1)',
                  }}
                >
                  {typeof column.data[rowIndex] === 'string' ? (
                    <span className={`${colIndex === 0 ? 'flex items-center justify-center' : ''}`}>
                      {column.data[rowIndex]}
                    </span>
                  ) : (
                    column.data[rowIndex]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
