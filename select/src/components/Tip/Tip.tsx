import { Container } from './Styled';

interface TooltipProps {
    title: string;
    className?: string;
    children: React.ReactNode
}

const SpanTip: React.FC<TooltipProps> = ({ title, className, children }) => {
    return(
        <Container className={className}>
            {children}
            <span>{title}</span>
        </Container>
    ); 
};

export default SpanTip;