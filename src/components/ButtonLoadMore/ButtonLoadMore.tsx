import { StyledBtn } from './ButtonLoadMore.styled';

interface IProps {
  onLoadMore: () => void;
}
export const ButtonLoadMore: React.FC<IProps> = ({ onLoadMore }) => {
  return (
    <StyledBtn type="button" onClick={onLoadMore}>
      Load More
    </StyledBtn>
  );
};
