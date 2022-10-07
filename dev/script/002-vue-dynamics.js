mainAppObj.mounted = function () {
  this.loaded = true;
}

mainAppObj.computed.isMonthsCountValid = function () {
  let a = 0;
  for (let i = 0; i < this.yearSplit.length; i++) {
    a += this.yearSplit[i].months;
  }
  if (a == 12) {
    return true;
  } else {
    return false;
  }
}

mainAppObj.computed.isCanalLengthValid = function () {
  if (this.canalLength <= 0) {
    return false
  }
  for (let i = 0; i < this.yearSplit.length; i++) {
    let a = 0;
    for (let j = 0; j < this.yearSplit[i].sections.length; j++) {
      a += this.yearSplit[i].sections[j].cLength;
    }
    if (a != this.canalLength) {
      return false;
    }
  }
  return true;
}

mainAppObj.watch.yearSplit = {
  handler(old) {
    this.autoaupdate++;
  }
}

mainAppObj.methods.sectionSizeModifier = function (yearSplitIdx, sectionsIdx, functionality) {
  switch (functionality) {
    case 0:
      this.yearSplit[yearSplitIdx].sections.push({
        show: true,
        cLength: this.canalLength/(this.yearSplit[yearSplitIdx].sections.length+1),
        volume: 10,
        evapRate: 0.1
      });
      break;
    case 1:
      this.yearSplit[yearSplitIdx].sections.splice(sectionsIdx, 1);
      break;
    case 2:
      this.yearSplit[yearSplitIdx].sections.splice(sectionsIdx - 1, 0, this.yearSplit[yearSplitIdx].sections.splice(sectionsIdx, 1)[0]);
      break;
    case 3:
      this.yearSplit[yearSplitIdx].sections.splice(sectionsIdx + 1, 0, this.yearSplit[yearSplitIdx].sections.splice(sectionsIdx, 1)[0]);
      break;

    default:
      break;
  }
}

mainAppObj.methods.isValidCanalLengthThisSeason = function (seasonIdx) {
  if (this.canalLength <= 0) {
    return false
  }
  let a = 0;
  for (let i = 0; i < this.yearSplit[seasonIdx].sections.length; i++) {
    a += this.yearSplit[seasonIdx].sections[i].cLength;
  }
  if (a == this.canalLength) {
    return true;
  } else {
    return false;
  }
}
mainAppObj.methods.yearSplitSizeModifier = function (yearSplitIdx, functionality) {
  switch (functionality) {
    case 0:
      this.yearSplit.push({
        show: true,
        months: 12/(this.yearSplit.length+1),
        sections: [{
          show: true,
          cLength: this.canalLength,
          volume: 10,
          evapRate: 0.1
        }]
      });
      break;
    case 1:
      this.yearSplit.splice(yearSplitIdx, 1);
      break;
    case 2:
      this.yearSplit.splice(yearSplitIdx - 1, 0, this.yearSplit.splice(yearSplitIdx, 1)[0]);
      break;
      case 3:
      this.yearSplit.splice(yearSplitIdx + 1, 0, this.yearSplit.splice(yearSplitIdx, 1)[0]);
      break;

    default:
      break;
  }
}