import React from "react";
import Option from "./Option";

const Table = () => {
  return (
    <div>
      <Option />
      <div className="m-auto">
        <table class="table-auto w-full border border-black bg-yellow-100 mt-3">
          <thead>
            <tr>
              <th class="border border-black">ID</th>
              <th class="border border-black">Title</th>
              <th class="border border-black">Description</th>
              <th class="border border-black">Price</th>
              <th class="border border-black">Category</th>
              <th class="border border-black">Sold</th>
              <th class="border border-black">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
            </tr>
            <tr>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
            </tr>
            <tr>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
              <td class="border border-black">Malcolm Lockyer</td>
              <td class="border border-black">1961</td>
              <td class="border border-black">The Sliding</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
