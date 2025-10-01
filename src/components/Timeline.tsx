'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaGraduationCap,
  FaBriefcase,
  FaGlobeAmericas,
  FaCode,
  FaFilter,
} from 'react-icons/fa';
import moment from 'moment';
import { LIFE_EVENTS, TimelineEvent } from '@/constants/lifeEvents.const';

const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const currentDate = moment();
  const currentYear = currentDate.format('YYYY');
  const currentMonth = currentDate.format('MMMM');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events: TimelineEvent[] = LIFE_EVENTS.map((event: TimelineEvent) =>
    event?.key === 'inventive-ai'
      ? {
          ...event,
          date: `March 2024 - ${currentMonth} ${currentYear} (Present)`,
        }
      : event
  );

  const getIcon = (type: TimelineEvent['type']) => {
    const Icon = () => {
      switch (type) {
        case 'education':
          return (
            <div className="h-5 w-5">
              <FaGraduationCap />
            </div>
          );
        case 'work':
          return (
            <div className="h-5 w-5">
              <FaBriefcase />
            </div>
          );
        case 'travel':
          return (
            <div className="h-5 w-5">
              <FaGlobeAmericas />
            </div>
          );
        // case 'project':
        //   return (
        //     <div className="h-5 w-5">
        //       <FaCode />
        //     </div>
        //   );
      }
    };

    return (
      <div className="flex items-center justify-center w-full h-full">
        <Icon />
      </div>
    );
  };

  const getIconStyle = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return {
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          color: '#fff',
        };
      case 'work':
        return {
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#fff',
        };
      case 'travel':
        return {
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          color: '#fff',
        };
      // case 'project':
      //   return {
      //     background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
      //     color: '#fff',
      //   };
    }
  };

  const getContentStyle = (type: TimelineEvent['type']) => {
    const baseStyles = {
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      padding: '1.5rem',
      border: 'none',
      backgroundColor: 'white',
    };

    switch (type) {
      case 'education':
        return { ...baseStyles, borderTop: '5px solid #3b82f6' };
      case 'work':
        return { ...baseStyles, borderTop: '5px solid #10b981' };
      case 'travel':
        return { ...baseStyles, borderTop: '5px solid #8b5cf6' };
      // case 'project':
      //   return { ...baseStyles, borderTop: '5px solid #fbbf24' };
    }
  };

  const filteredEvents =
    activeFilter === 'all'
      ? events
      : events.filter((event) => event.type === activeFilter);

  const colors = {
    all: 'bg-gray-700',
    education: 'bg-blue-600',
    work: 'bg-green-600',
    travel: 'bg-purple-600',
    project: 'bg-yellow-500',
  };

  return (
    <div className="py-10">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries({
            all: 'All',
            education: 'Education',
            work: 'Work',
            travel: 'Travel',
            // project: 'Projects',
          }).map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full text-white transition-all duration-300 flex items-center gap-2 
                  ${
                    activeFilter === key
                      ? `${colors[key as keyof typeof colors]} shadow-lg`
                      : 'bg-gray-400 dark:bg-gray-700'
                  }`}
            >
              {key !== 'all' &&
                getIcon(key as Exclude<keyof typeof colors, 'all'>)}
              {key === 'all' && <FaFilter />}
              {label}
            </motion.button>
          ))}
        </div>

        <div className="h-[calc(100vh-14rem)] overflow-y-auto pb-40">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <VerticalTimeline
                  animate={true}
                  lineColor="var(--timeline-line, #e5e7eb)"
                >
                  {filteredEvents.map((event, index) => (
                    <VerticalTimelineElement
                      key={index}
                      className="vertical-timeline-element hover:scale-[1.02] transition-transform duration-300"
                      date={event.date}
                      dateClassName={`text-gray-600 dark:text-gray-300 font-medium mr-4 ml-4`}
                      contentStyle={getContentStyle(event.type)}
                      contentArrowStyle={{
                        borderRight: '10px solid white',
                      }}
                      iconStyle={getIconStyle(event.type)}
                      icon={getIcon(event.type)}
                      visible={true}
                    >
                      <h3 className="text-gray-900 dark:text-white vertical-timeline-element-title font-bold text-xl mb-1">
                        {event.title}
                      </h3>
                      {event.location && (
                        <h4 className="text-gray-600 dark:text-gray-400 vertical-timeline-element-subtitle mb-3 flex items-center gap-1">
                          <span className="inline-block w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mr-1"></span>
                          {event.location}
                        </h4>
                      )}
                      <div className="text-gray-700 dark:text-gray-300 mt-4">
                        {Array.isArray(event.description) ? (
                          <ul className="space-y-2">
                            {event.description.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{event.description}</p>
                        )}
                      </div>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
