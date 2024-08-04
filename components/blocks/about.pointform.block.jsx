// Util packages
import Icon from '../utils/icon.util'

// Utility packages
import space from '../utils/spacing.util';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	point written content
 * @returns {jsx} <CopyBlock />
 */
export default function PointFormBlock({ containerClass, iconClass, icon, title, points }) {
    return (
      <>
        <div className={containerClass}>
          <span className={iconClass}>
            <Icon icon={icon} />
          </span>
          <h3>{title}</h3>
          <ul>
            {points.map((point, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                    &bull; {point}
                </li>   
            ))}
          </ul>
        </div>
      </>
    );
  }
  