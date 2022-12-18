import { Tooltip, Typography } from "@mui/material";
import { Artefact } from "./Artefact";

interface IProps {
  artefact: Artefact;
  onClick: () => void;
}

export const ArtefactButton = ({
  artefact,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <Tooltip
      title={
        <ul>
          {artefact.Sources.map((s) => (
            <li>
              <Typography>
                {s[0]} {s[1]}
              </Typography>
            </li>
          ))}
        </ul>
      }
    >
      <img onClick={onClick} src={artefact.Image} alt={artefact.Name} />
    </Tooltip>
  );
};
