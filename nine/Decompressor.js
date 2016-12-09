const markerRegex = /\((\d+)x(\d+)\)/;

class Decompressor {
    constructor(compressed) {
        this.compressed = compressed;
    }

    nextMarker(segment) {
        let match = markerRegex.exec(segment);
        return match ? {marker: match[0], index: match.index, charIdx: parseInt(match[1]), count: parseInt(match[2])} : null;
    }

    decompressSegment(segment) {
        let nextMarker = this.nextMarker(segment);
        if(nextMarker) {
            let decompressed = segment.slice(0, nextMarker.index),
                startIdx = nextMarker.index + nextMarker.marker.length,
                chars = segment.slice(startIdx, startIdx + nextMarker.charIdx);
            return {message: decompressed + new Array(nextMarker.count+1).join(chars), idx: nextMarker.index + nextMarker.marker.length + nextMarker.charIdx};
        }
        return {message: segment, idx: segment.length || 1};
    }

    decompress() {
        let compressed = this.compressed.slice(0),
            segment = this.decompressSegment(compressed),
            decompressed = '';

        while(segment.idx <= compressed.length) {
            decompressed += segment.message;
            compressed = compressed.slice(segment.idx);
            segment = this.decompressSegment(compressed);
        }

        return decompressed + compressed;
    }
}

module.exports = {
    Decompressor
};