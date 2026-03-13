import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: -200% 0%; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${pulse} 1.5s infinite;
  border-radius: 4px;
`;

const SkeletonCard = styled.div<{ $viewType: "grid" | "list" }>`
  background: white;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: ${(props) => (props.$viewType === "grid" ? "0" : "12px")};
  display: flex;
  flex-direction: ${(props) => (props.$viewType === "grid" ? "column" : "row")};
  gap: 12px;
  height: ${(props) => (props.$viewType === "grid" ? "100%" : "140px")};
`;

const SkeletonImage = styled(SkeletonBase)<{ $viewType: "grid" | "list" }>`
  aspect-ratio: 16 / 9;
  width: ${(props) => (props.$viewType === "list" ? "200px" : "100%")};
  border-radius: ${(props) =>
    props.$viewType === "grid" ? "12px 12px 0 0" : "8px"};
`;

const SkeletonContent = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VeiculoCardSkeleton = ({
  viewType,
}: {
  viewType: "grid" | "list";
}) => (
  <SkeletonCard $viewType={viewType}>
    <SkeletonImage $viewType={viewType} />
    <SkeletonContent>
      <SkeletonBase style={{ width: "60%", height: "20px" }} />
      <SkeletonBase style={{ width: "40%", height: "14px" }} />
      <SkeletonBase
        style={{ width: "100%", height: "30px", marginTop: "auto" }}
      />
    </SkeletonContent>
  </SkeletonCard>
);
