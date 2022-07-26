import addresses from "../whitelist";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

const getMerkleTree = () => {
  const leafNodes = addresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sort: true });
  return merkleTree;
};

export const getRootHash = () => {
  const merkleTree = getMerkleTree();
  const rootHash = merkleTree.getRoot();
  return rootHash.toString("hex");
};

export const getMerkleProofHash = (address) => {
  const merkleTree = getMerkleTree();
  const proof = merkleTree.getHexProof(keccak256(address));
  return proof;
};
