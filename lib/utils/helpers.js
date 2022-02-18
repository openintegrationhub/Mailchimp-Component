const dayjs = require("dayjs");

function isSecondDateAfter(a, b) {
  return dayjs(a).isAfter(b);
}

function mapFieldNames(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(mapFieldNames);
  } else if (typeof obj === "object" && obj) {
    obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
    return obj;
  }
}
function getMetadata(metadata) {
  const metadataKeys = ["oihUid", "recordUid", "applicationUid"];
  let newMetadata = {};
  for (let i = 0; i < metadataKeys.length; i++) {
    newMetadata[metadataKeys[i]] =
      metadata !== undefined && metadata[metadataKeys[i]] !== undefined
        ? metadata[metadataKeys[i]]
        : `${metadataKeys[i]} not set yet`;
  }
  return newMetadata;
}

function dataAndSnapshot (newElement,snapshot,snapshotKey,standardSnapshot,emitter) {
  if (Array.isArray(newElement.data)) {
    let lastElement = 0;
    for (let i = 0; i < newElement.data.length; i++) {
      const newObject = { ...newElement, data: newElement.data[i] };
      const currentObjectDate = newObject.data[snapshotKey]
        ? newObject.data[snapshotKey]
        : newObject.data[standardSnapshot];
      if (snapshot.lastUpdated === 0) {
        if (isSecondDateAfter(currentObjectDate, lastElement)) {
          lastElement = snapshotKey
            ? newElement.data[snapshotKey]
            : newElement.data[standardSnapshot];
        }
        emitter("data", newObject);
      } else {
        if (isSecondDateAfter(currentObjectDate, snapshot.lastUpdated)) {
          if (isSecondDateAfter(currentObjectDate, lastElement)) {
            lastElement = currentObjectDate;
          }
          emitter("data", newObject);
        }
      }
    }
    snapshot.lastUpdated =
      lastElement !== 0 ? lastElement : snapshot.lastUpdated;
    console.log("returned a snapshot 1", snapshot);

    emitter("snapshot", snapshot);
    console.log("returned a snapshot");
  } else {
    emitter("data", newElement);
  }
}
module.exports = { isSecondDateAfter, mapFieldNames, getMetadata, dataAndSnapshot };
