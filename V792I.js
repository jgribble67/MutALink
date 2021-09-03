final String contig= "MT020881.1";
final int mutpos = 15814;
final char mutbase='A';
if(record.getReadUnmappedFlag()) return false;
if(!record.getContig().equals(contig)) return false;
if(record.getEnd() < mutpos) return false;
if(record.getStart() > mutpos) return false;
int readpos = record.getReadPositionAtReferencePosition(mutpos);
if(readpos<1) return false;
readpos--;
final byte[]    bases= record.getReadBases();
if(bases[readpos]==mutbase) return true;
return false;